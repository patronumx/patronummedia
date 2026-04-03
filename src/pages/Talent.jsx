import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { TEAM } from '../data/talentPlayers';

const Talent = () => {
  return (
    <section className="talent" style={{ paddingTop: '220px', paddingBottom: '120px' }}>
      <div className="container">
        <motion.div
          className="talent-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1><span className="text-white">TEKKEN </span><span className="accent-text">LEGENDS</span></h1>
          <p>SELECT A FIGHTER TO VIEW PROFILE</p>
        </motion.div>

        <motion.div
          className="talent-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {TEAM.map((player) => (
            <Link key={player.id} to={`/talent/${player.id}`} className="talent-card-link">
              <motion.div
                className="talent-card"
                whileHover={{ scale: 1.02, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="image-wrapper">
                  <img src={player.image} alt={player.name} />
                </div>
                <div className="info">
                  <h3>{player.name}</h3>
                  <div className="role">{player.role}</div>
                  <div className="accent-bar"></div>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Talent;
