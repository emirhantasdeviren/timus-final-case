import {
    Body,
    Controller,
    Delete,
    Get,
    NotFoundException,
    Param,
    ParseIntPipe,
    Post,
} from '@nestjs/common';
import { FactoriesService } from 'src/factories/factories.service';
import { FactoryDetailsService } from './factory-details.service';
import { FactoryDetailDto } from './dto/factory-detail-dto';
import { FactoryDetail } from './factory-detail.entity';

@Controller('api/v1/factory-details')
export class FactoryDetailsController {
    constructor(
        private readonly factoryDetailsService: FactoryDetailsService,
        private readonly factoriesService: FactoriesService,
    ) {}

    @Post()
    async create(
        @Body() factoryDetailDto: FactoryDetailDto,
    ): Promise<FactoryDetail> {
        const factory = await this.factoriesService.findOne(
            factoryDetailDto.factoryId,
        );
        if (!factory) {
            throw new NotFoundException('Factory not found');
        }
        return this.factoryDetailsService.create(factoryDetailDto, factory);
    }

    @Get()
    findAll(): Promise<FactoryDetail[]> {
        return this.factoryDetailsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number): Promise<FactoryDetail> {
        return this.factoryDetailsService.findOne(id);
    }

    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
        return this.factoryDetailsService.remove(id);
    }
}
