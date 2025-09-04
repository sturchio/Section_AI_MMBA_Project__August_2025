import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// Sample idea generation route
app.post('/api/ideas', async (req, res) => {
  const { audience, goals, theme } = req.body;

  // Replace with real AI integration later
  const ideas = [
    { title: 'Gen Z Tech Fair', description: 'Immersive VR and influencer demos' },
    { title: 'Eco-Gamified Conference', description: 'Interactive booths + sustainable design' },
  ];

  res.json({ ideas });
});

app.get('/', (_, res) => res.send('Event_Ideate Backend API is live'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Backend running on http://localhost:${PORT}`));