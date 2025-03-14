import {
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { GetUsersParamDto } from './dtos/get-users-param.dto';
import { PatchUserDto } from './dtos/patch-user.dto';

@Controller('users')
export class UsersController {
  @Get('/:id?')
  public getUsers(
    @Param() params: GetUsersParamDto,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
  ) {
    return `getUsers lol ${params.id}, ${limit}, ${page}`;
  }

  @Post()
  public createUsers(@Body() body: CreateUserDto) {
    console.log(body);
    return 'post create';
  }

  @Patch()
  public patchUser(@Body() body: PatchUserDto) {
    console.log(body);
  }
}
