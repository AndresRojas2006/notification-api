
import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getHello(): string {
    return 'Hola ingeniera carito,Soy Christian Rojas ¡proyecto entregado con éxito! 🚀';
  }
}
