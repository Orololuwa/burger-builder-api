import { Expose, Transform, Type } from 'class-transformer';
import { OrderedIngredients } from 'src/core/entities/ordered-ingredients.entity';
import { UserDTO } from 'src/core/dtos/users/dto';
import { User } from 'src/core/entities/users.entity';

export class OrderDTO {
  @Expose()
  id: number;

  @Expose()
  price: number;

  @Expose()
  deliveryMethod: string;

  @Expose()
  @Transform(({ obj }) => obj.ingredients)
  ingredients: OrderedIngredients;
}
