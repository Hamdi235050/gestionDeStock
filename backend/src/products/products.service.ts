import {
  BadRequestException,
  Injectable,
  NotFoundException,
  OnModuleInit,
} from "@nestjs/common";
import { initializeDatabase, query } from "../db";
import { ProductCreateDto } from "./dto/product-create.dto";
import { ProductUpdateDto } from "./dto/product-update.dto";

const selectProducts = `
  SELECT
    id,
    name,
    reference,
    category,
    quantity,
    alert_threshold,
    description,
    created_at AS "createdAt",
    updated_at AS "updatedAt"
  FROM products
`;

@Injectable()
export class ProductsService implements OnModuleInit {
  async onModuleInit() {
    try {
      await initializeDatabase();
      console.log('✅ Table "products" créée ou déjà existante.');
    } catch (error) {
      console.error("❌ Erreur lors de l'initialisation de la BDD:", error);
    }
  }

  async findAll() {
    const result = await query(`${selectProducts} ORDER BY id DESC`);
    return result.rows;
  }

  async findOne(id: number) {
    const result = await query(`${selectProducts} WHERE id = $1`, [id]);
    if (result.rowCount === 0) {
      throw new NotFoundException("Produit introuvable.");
    }
    return result.rows[0];
  }

  async create(payload: ProductCreateDto) {
    try {
      const result = await query(
        `
          INSERT INTO products
            (name, reference, category, quantity, alert_threshold, description)
          VALUES ($1, $2, $3, $4, $5, $6)
          RETURNING
            id, name, reference, category, quantity,
            alert_threshold , description,
            created_at AS "createdAt", updated_at AS "updatedAt"
        `,
        [
          payload.name,
          payload.reference,
          payload.category,
          payload.quantity,
          payload.alert_threshold,
          payload.description ?? null,
        ],
      );
      return result.rows[0];
    } catch (error) {}
  }

  async update(id: number, payload: ProductUpdateDto) {
    const fields = Object.entries(payload).filter(
      ([, val]) => val !== undefined,
    );

    if (fields.length === 0) {
      throw new BadRequestException(
        "Aucune donnée fournie pour la mise à jour.",
      );
    }

    const updates = fields.map(([key], index) => `${key} = $${index + 1}`);

    const values = fields.map(([, val]) => val);
    values.push(id);

    const sql = `
    UPDATE products
    SET ${updates.join(", ")}, updated_at = NOW()
    WHERE id = $${values.length}
    RETURNING
      id, name, reference, category, quantity,
      alert_threshold AS "alert_threshold", description,
      created_at AS "createdAt", updated_at AS "updatedAt"
  `;

    const result = await query(sql, values);

    if (result.rowCount === 0) {
      throw new NotFoundException("Produit introuvable.");
    }

    return result.rows[0];
  }
}
