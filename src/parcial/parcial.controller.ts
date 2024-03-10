import { Controller, Get, Post, Body, Param, BadGatewayException } from '@nestjs/common';

@Controller('parcial')
export class ParcialController {
  
    @Get()
    getHola() {
        return 'Hola Mundo^_^';
    }

    @Post('/Dividir')
    dividir(
        @Body('dividendo') dividendo: number,
        @Body('divisor') divisor: number,
    ): number {
        if (divisor === 0) {
            throw new BadGatewayException('El divisor no puede ser cero :V');
        }
        const resultado = dividendo / divisor;
        return resultado;
    }
      
    @Post()
    multiplicar(@Body() numeros: { n1: number; n2: number }): number {
        const { n1, n2 } = numeros;
        return n1 * n2;
    }

    @Get('/Saludo/:name')
    getSaludo(@Param('name') name: string): string {
        return `¡Bienvenido jovenazo, ${name}!` ;
    }
}

