import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowLeft, Youtube, Twitter, Instagram, Trophy, Gamepad2, MapPin, Calendar, Star, Award, Medal } from 'lucide-react';
import { getPlayerById } from '../data/talentPlayers';

const TalentProfile = () => {
  const { playerId } = useParams();
  const player = getPlayerById(playerId);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [playerId]);

  if (!player) {
    return <Navigate to="/talent" replace />;
  }

  return (
    <section className="talent-profile-page">
      <div className="container">
        <motion.div
          className="talent-profile-shell"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <div className="talent-profile-topbar">
            <Link to="/talent" className="talent-back-link">
              <ArrowLeft size={18} />
              Back to Talent
            </Link>
          </div>

          <div className="talent-profile-layout">
            <aside className="modal-left">
              <div className="modal-card">
                <img src={player.image} alt={player.name} />
                <h2>{player.name}</h2>
                <div className="role">{player.role}</div>

                <div className="social-links">
                  {player.socials.youtube && <a href={player.socials.youtube.link} target="_blank" rel="noopener noreferrer" className="social-btn" style={{ background: '#ff0000' }}><Youtube size={16} /></a>}
                  {player.socials.twitter && <a href={player.socials.twitter.link} target="_blank" rel="noopener noreferrer" className="social-btn"><Twitter size={16} /></a>}
                  {player.socials.instagram && <a href={player.socials.instagram.link} target="_blank" rel="noopener noreferrer" className="social-btn" style={{ background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)' }}><Instagram size={16} /></a>}
                </div>

                <div className="stats-grid">
                  <div className="stat-item">
                    <h4>{player.stats.yearsActive}</h4>
                    <p>YEARS ACTIVE</p>
                  </div>
                  <div className="stat-item">
                    <h4>{player.stats.majorTitles}</h4>
                    <p>MAJOR TITLES</p>
                  </div>
                </div>
              </div>
            </aside>

            <div className="talent-profile-content">
              <div className="modal-header-text">
                <h3>{player.heroTitle.top}</h3>
                <h1>{player.heroTitle.namePart1} <span className="accent-text" style={{ color: 'var(--accent-cyan)' }}>{player.heroTitle.namePart2}</span></h1>
                <div className="achievements-pills">
                  {player.badges.map((achievement, idx) => (
                    <span key={idx} className="pill">{achievement}</span>
                  ))}
                </div>
              </div>

              <div className="bio-data">
                <div className="bio-title">Bio Data</div>
                <div className="bio-grid">
                  <div className="bio-item">
                    <div className="bio-icon"><Gamepad2 size={20} /></div>
                    <div className="bio-info">
                      <p>GAMING TAG</p>
                      <h4>{player.bio.gamingTag}</h4>
                    </div>
                  </div>
                  <div className="bio-item">
                    <div className="bio-icon"><MapPin size={20} /></div>
                    <div className="bio-info">
                      <p>LOCATION</p>
                      <h4>{player.bio.location}</h4>
                    </div>
                  </div>
                  <div className="bio-item">
                    <div className="bio-icon"><Calendar size={20} /></div>
                    <div className="bio-info">
                      <p>STARTED PLAYING</p>
                      <h4>{player.bio.startedPlaying}</h4>
                    </div>
                  </div>
                  <div className="bio-item">
                    <div className="bio-icon"><Trophy size={20} /></div>
                    <div className="bio-info">
                      <p>INTERNAL RANK</p>
                      <h4>{player.bio.rank}</h4>
                    </div>
                  </div>
                </div>
              </div>

              <div className="global-recognition">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px', color: '#fbbf24' }}>
                  <Award size={24} />
                  <span style={{ fontWeight: 700, fontSize: '0.9rem', letterSpacing: '1px' }}>HIGHLIGHT</span>
                </div>
                <h2>{player.highlight.title}</h2>
                <p>{player.highlight.description}</p>
              </div>

              <div className="tournament-achievements">
                <h2 className="bio-title" style={{ fontSize: '1.8rem' }}>Tournament Achievements</h2>

                <div className="achieve-group">
                  <h3 style={{ color: '#fbbf24' }}><Trophy size={18} /> CHAMPIONSHIPS WON</h3>
                  <div className="grid gap-3">
                    {player.achievements.wins.map((item, i) => (
                      <div key={i} className="achieve-row highlight-win">
                        <div className="achieve-year">{item.year}</div>
                        <div className="achieve-name">{item.name}</div>
                        <div className="achieve-rank">{item.rank}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="achieve-group">
                  <h3 style={{ color: '#cbd5e1' }}><Medal size={18} /> RUNNER-UP FINISHES</h3>
                  <div className="grid gap-3">
                    {player.achievements.runnerUps.map((item, i) => (
                      <div key={i} className="achieve-row highlight-runner">
                        <div className="achieve-year">{item.year}</div>
                        <div className="achieve-name">{item.name}</div>
                        <div className="achieve-rank">{item.rank}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="achieve-group">
                  <h3 style={{ color: '#a1a1aa' }}><Star size={18} /> NOTABLE APPEARANCES</h3>
                  <div className="grid gap-3">
                    {player.achievements.notable.map((item, i) => (
                      <div key={i} className="achieve-row highlight-notable">
                        <div className="achieve-year">{item.year}</div>
                        <div className="achieve-name">{item.name}</div>
                        <div className="achieve-rank">{item.rank}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TalentProfile;
