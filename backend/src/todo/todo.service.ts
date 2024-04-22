import { Injectable } from '@nestjs/common';
import { Prisma, Task as TaskModel } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class TodoService {
  constructor(private prisma: DatabaseService) {}

  async todoList() {
    return this.prisma.task.findMany();
  }

  async createTask(data: Prisma.TaskCreateInput): Promise<TaskModel> {
    return this.prisma.task.create({ data });
  }

  async deleteTask(where: Prisma.TaskWhereUniqueInput): Promise<TaskModel> {
    return this.prisma.task.delete({
      where,
    });
  }

  async updateTask(params: {
    where: Prisma.TaskWhereUniqueInput;
    data: Prisma.TaskUpdateInput;
  }): Promise<TaskModel> {
    const { data, where } = params;
    return this.prisma.task.update({
      data,
      where,
    });
  }
}
