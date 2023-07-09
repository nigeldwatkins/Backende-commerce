const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
  // find all categories
  const categories = await Category.findAll({ include: [{ model: Product }] });
  res.status(200).json(categories);
} catch (err) {
// error custom message that sends 500 status 
  res.status(500).json({ message: `not available` });
}
});

router.get('/:id', async (req, res) => {
  try {
    // find category by its `id` 
    const category = await Category.findByPk(req.params.id, { include: [{ model: Product }] });

    if (!category) {
      res.status(404).json({ message: 'id not found' });
      return;
    }

    res.status(200).json(category);
  } catch (err) {
    // Handle errors by sending a 500 status with a custom message
    res.status(500).json({ message: 'not found!' });
  }
});

// Create a new category
router.post('/', async (req, res) => {
  try {
    // Create a new category using the data in the request body
    const newCategory = await Category.create(req.body);
    res.status(200).json(newCategory);
  } catch (err) {
  
    res.status(400).json({ message: 'creation failed' });
  }
});

// Update a category by ID
router.put('/:id', async (req, res) => {
  try {
    // Update the category with the matching ID using the data in the request body
    const updated = await Category.update(req.body, { where: { id: req.params.id } });

    
    !updated[0] ? res.status(404).json({ message: 'id not found' }) : res.status(200).json(updated);
  } catch (err) {
    
    res.status(500).json({ message: 'update failed' });
  }
});

// Delete a category by ID
router.delete('/:id', async (req, res) => {
  try {
    // Delete the category with the matching ID
    const deleted = await Category.destroy({ where: { id: req.params.id } });

   
    !deleted ? res.status(404).json({ message: 'id not found' }) : res.status(200).json(deleted);
  } 
  catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;