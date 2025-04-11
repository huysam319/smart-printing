const Printer = require("../models/printer.model")
const seedprinters = async () => {
  try {
    // Array of seed data
    const printers = [
      {
        adminId:1,
        model:"PIXMA-TS8870",
        brand:"Canon",
        description:"Advanced Wireless All-In-One Printer with Intuitive 4.3” Touchscreen and Automatic Duplex Printing",
        campusName:"Dĩ An",
        buildingName:"H1",
        roomNumber:604,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        adminId:1,
        model:" PIXMA-G3270",
        brand:"Canon",
        description:"Wireless MegaTank All-in-One PrinterWireless. Print. Copy. Scan.",
        campusName:"Dĩ An",
        buildingName:"H1",
        roomNumber:607,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        adminId:1,
        model:"PIXMA-TS7720",
        brand:"Canon",
        description:"Wireless Inkjet All-in-One Printer. Print. Copy. Scan.",
        campusName:"Dĩ An",
        buildingName:"H1",
        roomNumber:101,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ];

    await Printer.bulkCreate(printers, { validate: true });

    console.log('printer seeding completed!');
  } catch (err) {
    console.error('Error while seeding printers:', err);
  }
};

module.exports = seedprinters