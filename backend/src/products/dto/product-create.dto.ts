import { Type } from "class-transformer";
import { IsInt, IsNotEmpty, IsOptional, IsString, Min } from "class-validator";

export class ProductCreateDto {
  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsString()
  @IsNotEmpty()
  reference!: string;

  @IsString()
  @IsNotEmpty()
  category!: string;

  @Type(() => Number)
  @IsInt()
  @Min(0)
  quantity = 0;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(0)
  alert_threshold?: number;

  @IsOptional()
  @IsString()
  description?: string;
}
