import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    default: 'test@test.com',
  })
  email: string;

  @ApiProperty({
    default: 'Test Test',
  })
  fullname: string;

  @ApiProperty({
    default: '123312',
  })
  password: string;
}
