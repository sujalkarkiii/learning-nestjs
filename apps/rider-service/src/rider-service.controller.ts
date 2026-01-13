import { Controller, Get, Param } from '@nestjs/common';
import { RiderServiceService } from './rider-service.service';

@Controller()
export class RiderServiceController {
  constructor(private readonly riderServiceService: RiderServiceService) {}

  @Get(':id')
  ferRiderId(
    @Param()
    params:any
  ) {
    return {
      _id:params.id,
      firstname:"sujal",
      lastname:"karki",
      email:"sujalkarki1904@gmail.com"
    }
  }
}
