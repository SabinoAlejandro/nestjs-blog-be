import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get('/:id')
  public getUsers(@Param('id') id: number) {
    return `getUsers lol ${id}`;
  }

  @Post()
  public createUsers(@Body() request: any) {
    console.log(request);
    return 'post create';
  }
}
