const express = require('express');
const router = express.Router();
const Job = require('../models/Job');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');

// Get all jobs
router.get('/', async (req, res) => {
  console.log('GET /api/jobs request received');
  try {
    const jobs = await Job.find();
    console.log('Found jobs in database:', jobs);
    console.log('Number of jobs found:', jobs.length);
    jobs.forEach(job => {
      console.log('Job details:', {
        id: job._id,
        title: job.title,
        status: job.status || 'Not set',
        department: job.department,
        location: job.location
      });
    });
    res.json(jobs);
  } catch (err) {
    console.error('Error fetching jobs:', err);
    res.status(500).json({ message: 'Error fetching jobs', error: err.message });
  }
});

// Get active jobs only
router.get('/active', async (req, res) => {
  console.log('GET /api/jobs/active request received');
  try {
    const jobs = await Job.find({ status: 'Active' });
    console.log(`Found ${jobs.length} active jobs`);
    res.json(jobs);
  } catch (err) {
    console.error('Error fetching active jobs:', err);
    res.status(500).json({ message: 'Error fetching active jobs', error: err.message });
  }
});

// Fix existing jobs - add status if missing
router.post('/fix-status', auth, async (req, res) => {
  try {
    const result = await Job.updateMany(
      { status: { $exists: false } },
      { $set: { status: 'Active' } }
    );
    console.log('Fixed jobs status:', result);
    res.json({ message: 'Jobs updated successfully', result });
  } catch (err) {
    console.error('Error fixing jobs:', err);
    res.status(500).json({ message: 'Error fixing jobs', error: err.message });
  }
});

// Create a new job (admin only)
router.post('/', [auth, admin], async (req, res) => {
  console.log('POST /api/jobs request received');
  console.log('Creating new job with data:', req.body);
  
  try {
    // Ensure new jobs have Active status
    const jobData = {
      ...req.body,
      status: req.body.status || 'Active'
    };
    
    console.log('Final job data to be saved:', jobData);
    
    const job = new Job(jobData);
    await job.save();
    
    console.log('Job successfully saved:', {
      id: job._id,
      title: job.title,
      status: job.status,
      department: job.department,
      location: job.location
    });
    
    res.status(201).json(job);
  } catch (err) {
    console.error('Error creating job:', err);
    res.status(400).json({ message: 'Error creating job', error: err.message });
  }
});

// Get a specific job
router.get('/:id', async (req, res) => {
  console.log(`GET /api/jobs/${req.params.id} request received`);
  try {
    const job = await Job.findById(req.params.id);
    if (!job) {
      console.log('Job not found');
      return res.status(404).json({ message: 'Job not found' });
    }
    console.log('Found job:', job);
    res.json(job);
  } catch (err) {
    console.error('Error fetching job by ID:', err);
    res.status(500).json({ message: 'Error fetching job', error: err.message });
  }
});

// Update a job (admin only)
router.put('/:id', auth, async (req, res) => {
  console.log(`PUT /api/jobs/${req.params.id} request received`);
  console.log('Update data:', req.body);
  try {
    const job = await Job.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!job) {
      console.log('Job not found for update');
      return res.status(404).json({ message: 'Job not found' });
    }
    console.log('Job updated:', job);
    res.json(job);
  } catch (err) {
    console.error('Error updating job:', err);
    res.status(400).json({ message: 'Error updating job', error: err.message });
  }
});

// Delete a job (admin only)
router.delete('/:id', auth, async (req, res) => {
  console.log(`DELETE /api/jobs/${req.params.id} request received`);
  try {
    const job = await Job.findByIdAndDelete(req.params.id);
    if (!job) {
      console.log('Job not found for deletion');
      return res.status(404).json({ message: 'Job not found' });
    }
    console.log('Job deleted:', job);
    res.json({ message: 'Job deleted successfully' });
  } catch (err) {
    console.error('Error deleting job:', err);
    res.status(500).json({ message: 'Error deleting job', error: err.message });
  }
});

module.exports = router; 