/*
  Warnings:

  - The primary key for the `UserGroup` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `UserGroup` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `B` on the `_UserToUserGroup` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "_UserToUserGroup" DROP CONSTRAINT "_UserToUserGroup_B_fkey";

-- AlterTable
ALTER TABLE "UserGroup" DROP CONSTRAINT "UserGroup_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL DEFAULT gen_random_uuid(),
ADD CONSTRAINT "UserGroup_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "_UserToUserGroup" DROP COLUMN "B",
ADD COLUMN     "B" UUID NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "_UserToUserGroup_AB_unique" ON "_UserToUserGroup"("A", "B");

-- CreateIndex
CREATE INDEX "_UserToUserGroup_B_index" ON "_UserToUserGroup"("B");

-- AddForeignKey
ALTER TABLE "_UserToUserGroup" ADD CONSTRAINT "_UserToUserGroup_B_fkey" FOREIGN KEY ("B") REFERENCES "UserGroup"("id") ON DELETE CASCADE ON UPDATE CASCADE;
