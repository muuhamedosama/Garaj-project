import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Types } from "mongoose";
import { UserType } from "src/types/enums";

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true, unique: true })
  phone: string;

  @Prop()
  email: string;

  @Prop({ required: true })
  name: string;

  @Prop({
    required: true,
    enum: UserType,
    validate: {
      validator: function (value: number) {
        if (value === UserType.ServiceProvider) {
          // Check all required fields for 'provider'
          return (
            this.businessName &&
            this.location &&
            this.address &&
            this.specificCarBrands &&
            this.openingFrom &&
            this.closingAt &&
            this.amenities &&
            this.specialization
          );
        }
        return true; // If not a provider, always valid
      },
      message: "All provider fields must be filled when userType is provider.",
    },
  })
  userType: number;

  @Prop({
    required: function () {
      return this.userType === UserType.ServiceProvider;
    },
  })
  password: string;

  @Prop({
    required: function () {
      return this.userType === UserType.ServiceProvider;
    },
  })
  businessName: string;

  @Prop({
    required: function () {
      return this.userType === UserType.ServiceProvider;
    },
  })
  location: string;

  @Prop({
    required: function () {
      return this.userType === UserType.ServiceProvider;
    },
  })
  address: string;

  @Prop({
    required: function () {
      return this.userType === UserType.ServiceProvider;
    },
  })
  specificCarBrands: string[];

  @Prop({
    required: function () {
      return this.userType === UserType.ServiceProvider;
    },
  })
  openingFrom: string;

  @Prop({
    required: function () {
      return this.userType === UserType.ServiceProvider;
    },
  })
  closingAt: string;

  @Prop({
    required: function () {
      return this.userType === UserType.ServiceProvider;
    },
  })
  amenities: string[];

  @Prop({
    required: function () {
      return this.userType === UserType.ServiceProvider;
    },
  })
  specialization: string[];

  @Prop({ default: 0 })
  rating: number;

  @Prop({ type: Types.ObjectId, ref: "Service" })
  services: { serviceRef: Types.ObjectId; price: Number }[];

  _id: any;
}

export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.pre("save", function (next) {
  if (this.specificCarBrands?.length === 0) {
    this.specificCarBrands = undefined;
  }
  if (this.amenities?.length === 0) {
    this.amenities = undefined;
  }
  if (this.specialization?.length === 0) {
    this.specialization = undefined;
  }
  next();
});

UserSchema.pre<UserDocument>("save", function (next) {
  if (this.userType === UserType.ServiceProvider && this.isNew) {
    this.rating = 0;
  }
  next();
});
