const Store = require("../model/store")

const getAllstores = async (req, res, next) => {
    let stores;
    try {
        stores = await Store.find();
    } catch (err) {
        console.log(err);
    }

    if (!stores) {
        return res.status(404).json({ message: "No product found" });
    }
    else
        return res.status(200).json({ stores });
}

const getById = async (req, res, next) => {
    const id = req.params.id;
    let store;
    try {
        store = await Store.findById(id);
    } catch (err) {
        console.log(err);
    }
    if (!store) {
        return res.status(404).json({ message: "No product found" });
    }
    else
        return res.status(200).json({ store });
}

const addstores = async (req, res, next) => {
    const { name, price, quantity, available, discount, image } = req.body;
    let store;
    try {
        store = new Store({
            name,
            price,
            quantity,
            available,
            discount,
            image
        });
        await store.save();
    } catch (err) {
        console.log(err);
    }
    if (!store) {
        return res.status(500).json({ message: 'Unable to add' })
    }
    else {
        return res.status(201).json({ store });
    }
}

const updateproduct = async (req, res, next) => {
    const id = req.params.id;
    const { name, price, quantity, available, discount, image } = req.body;
    let store;
    try {
        store = await Store.findByIdAndUpdate(id, {
            name,
            price,
            quantity,
            available,
            discount,
            image
        });
        store = await store.save();
    } catch (err) {
        console.log(err);
    }
    if (!store) {
        return res.status(404).json({ message: 'Unable to update by this id' })
    }
    else {
        return res.status(200).json({ store });
    }
};

const deleteproduct = async (req, res, next) => {
    const id = req.params.id;
    let store;
    try {
        store = await Store.findByIdAndRemove(id);
    } catch (err) {
        console.log(err);
    }
    if (!store) {
        return res.status(404).json({ message: 'Unable to delete by this id' })
    }
    else {
        return res.status(200).json({ message: 'Product successfully deleted' });
    }
}

exports.getAllstores = getAllstores;
exports.addstores = addstores;
exports.getById = getById;
exports.updateproduct = updateproduct;
exports.deleteproduct = deleteproduct;