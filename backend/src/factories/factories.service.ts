import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Factory } from './factory.entity';
import { Repository } from 'typeorm';
import { FactoryDto } from './dto/factory-dto';

@Injectable()
export class FactoriesService {
    constructor(
        @InjectRepository(Factory)
        private readonly factoriesRepository: Repository<Factory>,
    ) {}

    create(factoryDto: FactoryDto): Promise<Factory> {
        const factory = new Factory();

        factory.name = factoryDto.name;
        factory.subscriptionStart = factoryDto.subscriptionStart;
        factory.subscriptionEnd = factoryDto.subscriptionEnd;
        factory.employeeCount = factoryDto.employeeCount;
        factory.free = factoryDto.free;

        return this.factoriesRepository.save(factory);
    }

    findAll(): Promise<Factory[]> {
        return this.factoriesRepository.find();
    }

    async findOne(id: number): Promise<Factory> {
        const factory = await this.factoriesRepository.findOneBy({ id });
        if (!factory) {
            throw new NotFoundException(
                `Factory with identifier ${id} not found`,
            );
        }
        return factory;
    }

    async remove(id: number): Promise<void> {
        const factory = await this.factoriesRepository.findOneBy({ id });
        if (!factory) {
            throw new NotFoundException(
                `Factory with identifier ${id} not found`,
            );
        }
        await this.factoriesRepository.remove(factory);
    }
}
