import { Module } from "@nestjs/common";
import { AdminModuleBase } from "./base/admin.module.base";
import { AdminService } from "./admin.service";
import { AdminResolver } from "./admin.resolver";

@Module({
  imports: [AdminModuleBase],
  providers: [AdminService, AdminResolver],
  exports: [AdminService],
})
export class AdminModule {}
