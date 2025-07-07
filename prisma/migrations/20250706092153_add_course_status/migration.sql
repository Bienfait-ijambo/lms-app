-- CreateEnum
CREATE TYPE "CourseStatus" AS ENUM ('free', 'paid');

-- AlterTable
ALTER TABLE "Course" ADD COLUMN     "status" "CourseStatus" NOT NULL DEFAULT 'free';
