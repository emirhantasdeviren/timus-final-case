import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    ParseIntPipe,
    Post,
} from '@nestjs/common';
import { FactoriesService } from './factories.service';
import { FactoryDto } from './dto/factory-dto';
import { Factory } from './factory.entity';

@Controller('api/v1/factories')
export class FactoriesController {
    constructor(private readonly factoriesService: FactoriesService) {}

    @Post()
    create(@Body() factoryDto: FactoryDto): Promise<Factory> {
        return this.factoriesService.create(factoryDto);
    }

    @Get()
    findAll(): Promise<Factory[]> {
        return this.factoriesService.findAll();
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number): Promise<Factory | null> {
        return this.factoriesService.findOne(id);
    }

    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
        return this.factoriesService.remove(id);
    }
}
