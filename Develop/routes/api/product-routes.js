const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');



// get all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.findAll({
      include: [{ model: Category }, { model: Tag }],
    });
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: "No Products found" });
  }
});

// get one product
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id, {
      include: [{ model: Category }, { model: Tag }],
    });
    if (!product) {
      res.status(404).json({ message: 'Product not found' });
      return;
    }
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ message: 'Failed to get the product' });
  }
});

// create new product
router.post('/:id', async (req, res) => {
  try {

    const category = await Product.findByPk(req.params.id, { include: [{ model: Product }] });


    if (!category) {
      res.status(404).json({ message: 'id not found' });
      return;
    }

    res.status(200).json(category);
  } catch (err) {

    res.status(500).json({ message: 'not found!' });
  }
});

// Create a new Product
router.post('/', async (req, res) => {
  try {

    const newCategory = await Product.create(req.body);
    res.status(200).json(newCategory);
  } catch (err) {

    res.status(400).json({ message: 'creation failed' });
  }
});

// Update a Product by ID
router.put('/:id', async (req, res) => {
  try {

    const updated = await Product.update(req.body, { where: { id: req.params.id } });


    !updated[0] ? res.status(404).json({ message: 'id not found' }) : res.status(200).json(updated);
  } catch (err) {

    res.status(500).json({ message: 'update failed' });
  }
});

// Delete a Product by ID
router.delete('/:id', async (req, res) => {
  try {
    // Delete the Product with the matching ID
    const deleted = await Product.destroy({ where: { id: req.params.id } });


    !deleted ? res.status(404).json({ message: 'id not found' }) : res.status(200).json(deleted);
  }
  catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;