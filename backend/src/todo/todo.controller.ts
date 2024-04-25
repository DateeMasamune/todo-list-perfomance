import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { Task as TaskModel } from '@prisma/client';
import { Task as TaskType } from './types';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  async getTodoList(): Promise<TaskModel[]> {
    return this.todoService.todoList();
  }

  @Post()
  async createTask(@Body() postData: Omit<TaskType, 'id'>): Promise<TaskModel> {
    const { title, description } = postData;
    return this.todoService.createTask({ title, description });
  }

  @Put()
  async updateTask(@Body() putData: TaskType): Promise<TaskModel> {
    const { id, title, description, is_checked, ...rest } = putData;
    return this.todoService.updateTask({
      where: { id },
      data: {
        title,
        description,
        is_checked,
        updated_at: new Date().toISOString(),
        ...rest,
      },
    });
  }

  @Delete('/:id')
  async deleteTask(@Param('id') id: string): Promise<TaskModel> {
    return this.todoService.deleteTask({ id: +id });
  }
}
