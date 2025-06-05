import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getHello(): string {
    return 'Hola profe, soy Andrés Rojas. Proyecto entregado exitosamente 💪';
  }
}