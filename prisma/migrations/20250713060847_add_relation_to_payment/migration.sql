-- AddForeignKey
ALTER TABLE "payment" ADD CONSTRAINT "payment_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
