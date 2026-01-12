import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateRiderCoordinateDto } from './dto/create-coordinates.dto';

@Controller('rider-coordinates')
export class RiderCoordinatesController {
    @Get()
    getRiderCordinates(){
        return 'hello i am from rider cordinates'
    }

    @Post()
    saveRidercoordinates(
        @Body() coordinateDto:CreateRiderCoordinateDto
    ){
            return coordinateDto
    }
}
