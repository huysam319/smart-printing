const Student = require("../models/student.model")
const seedStudents = async () => {
  try {
    // Array of seed data
    const students = [
      {
        studentId:"2211618",
        name:"Nguyễn Đăng Khoa",
        faculity:"Khoa học và kỹ thuật máy tính",
        major:"khoa học máy tính",
        email:"khoa.nguyen47245@hcmut.edu.vn",
        passwd:"nguyendangkhoa",
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ];

    await Student.bulkCreate(students, { validate: true });

    console.log('Student seeding completed!');
  } catch (err) {
    console.error('Error while seeding students:', err);
  }
};

module.exports = seedStudents