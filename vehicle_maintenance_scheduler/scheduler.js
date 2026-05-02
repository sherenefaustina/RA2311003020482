let vehicles = [];

const addVehicle = (vehicle) => {
    vehicles.push(vehicle);
};

const checkMaintenance = () => {
    const today = new Date();

    return vehicles.filter(v => {
        const last = new Date(v.lastServiceDate);
        const diffDays = (today - last) / (1000 * 60 * 60 * 24);
        return diffDays > 30;
    });
};

module.exports = { addVehicle, checkMaintenance };