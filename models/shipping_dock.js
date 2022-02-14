module.exports = (sequelize, DataTypes) => {
  const shipping_dock = sequelize.define("shipping_dock", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.ENUM("active", "inactive"),
    },
  });

  return shipping_dock;
};
