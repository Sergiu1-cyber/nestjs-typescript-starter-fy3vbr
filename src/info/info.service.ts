import { Injectable } from '@nestjs/common';
import { CreateInfoDto } from './dto/create-info.dto';
import { UpdateInfoDto } from './dto/update-info.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class InfoService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(createInfoDto: CreateInfoDto): Promise<User> {
    const createdUser = new this.userModel(createInfoDto);
    return createdUser.save();
  }

  findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  findOne(id: string) {
    return this.userModel.findById(id);
  }

  update(id: string, updateInfoDto: UpdateInfoDto) {
    return this.userModel.findByIdAndUpdate(id, updateInfoDto, { new: true });
  }

  remove(id: string) {
    return this.userModel.findByIdAndRemove(id);
  }
}
