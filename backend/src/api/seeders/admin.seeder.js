const Admin = require("../models/admin.model")
const seedAdmins = async () => {
  try {
    const admins = [
      {
        adminName:"Trần Trương Tuấn Phát",
        email:"tttp@hcmut.edu.vn",
        passwd:"software",
        campusName:"Dĩ An",
        building:"H6",
        roomNumber:607,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ];

    await Admin.bulkCreate(admins, { validate: true });

    console.log('Admin seeding completed!');
  } catch (err) {
    console.error('Error while seeding students:', err);
  }
};

module.exports = seedAdmins