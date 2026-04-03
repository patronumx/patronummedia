import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, Clock3 } from 'lucide-react';

const Contact = () => {
    return (
        <section className="container" style={{ paddingTop: '210px', paddingBottom: '100px', minHeight: '80vh' }}>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                style={{ maxWidth: '980px', margin: '0 auto' }}
            >
                <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                    <h1 style={{ fontSize: '3.5rem', marginBottom: '20px' }}>Contact <span className="gradient-text">Patronum Media</span></h1>
                    <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto', lineHeight: '1.8' }}>
                        Reach out directly for collaborations, esports partnerships, talent inquiries, and production opportunities. Our team is available around the clock to respond.
                    </p>
                </div>

                <div
                    className="glass-card"
                    style={{
                        padding: '48px',
                        textAlign: 'left',
                        background: 'linear-gradient(135deg, rgba(22, 12, 38, 0.92), rgba(17, 11, 31, 0.84))',
                        border: '1px solid rgba(217, 70, 239, 0.18)',
                        boxShadow: '0 24px 60px rgba(0, 0, 0, 0.28)'
                    }}
                >
                    <div style={{ display: 'grid', gridTemplateColumns: '1.15fr 1fr', gap: '32px', alignItems: 'stretch' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '24px' }}>
                            <div>
                                <div style={{ color: 'var(--accent-cyan)', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '14px' }}>
                                    Direct Contact
                                </div>
                                <h2 style={{ fontSize: '2.6rem', lineHeight: '1.05', marginBottom: '16px' }}>
                                    Let&apos;s build the next big move in esports together.
                                </h2>
                                <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: '1rem', lineHeight: '1.85', maxWidth: '460px' }}>
                                    For sponsorships, player management, content production, brand collaborations, and business inquiries, connect with Patronum Media directly using the details here.
                                </p>
                            </div>

                            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                                <div style={{ padding: '12px 18px', borderRadius: '999px', border: '1px solid rgba(217, 70, 239, 0.28)', background: 'rgba(217, 70, 239, 0.08)', color: 'white', fontWeight: 700 }}>
                                    24/7 Support
                                </div>
                                <div style={{ padding: '12px 18px', borderRadius: '999px', border: '1px solid rgba(99, 102, 241, 0.28)', background: 'rgba(99, 102, 241, 0.08)', color: 'white', fontWeight: 700 }}>
                                    All Days a Week
                                </div>
                            </div>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '22px 22px', borderRadius: '20px', background: 'linear-gradient(135deg, rgba(217, 70, 239, 0.09), rgba(217, 70, 239, 0.03))', border: '1px solid rgba(217, 70, 239, 0.16)' }}>
                                <div style={{ width: '54px', height: '54px', borderRadius: '18px', background: 'rgba(217, 70, 239, 0.16)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-cyan)', flexShrink: 0 }}>
                                    <Mail size={22} />
                                </div>
                                <div>
                                    <div style={{ color: 'rgba(255,255,255,0.62)', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '6px' }}>Email Address</div>
                                    <a href="mailto:patronumgg@gmail.com" style={{ color: 'white', fontSize: '1.28rem', fontWeight: 800, lineHeight: '1.3' }}>
                                        patronumgg@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '22px 22px', borderRadius: '20px', background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.09), rgba(99, 102, 241, 0.03))', border: '1px solid rgba(99, 102, 241, 0.16)' }}>
                                <div style={{ width: '54px', height: '54px', borderRadius: '18px', background: 'rgba(99, 102, 241, 0.16)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', flexShrink: 0 }}>
                                    <MessageCircle size={22} />
                                </div>
                                <div>
                                    <div style={{ color: 'rgba(255,255,255,0.62)', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '6px' }}>WhatsApp</div>
                                    <a href="tel:+923338638325" style={{ color: 'white', fontSize: '1.28rem', fontWeight: 800, lineHeight: '1.3' }}>
                                        +92 333 8638325
                                    </a>
                                </div>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '22px 22px', borderRadius: '20px', background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.09), rgba(147, 51, 234, 0.03))', border: '1px solid rgba(147, 51, 234, 0.16)' }}>
                                <div style={{ width: '54px', height: '54px', borderRadius: '18px', background: 'rgba(147, 51, 234, 0.16)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', flexShrink: 0 }}>
                                    <Clock3 size={22} />
                                </div>
                                <div>
                                    <div style={{ color: 'rgba(255,255,255,0.62)', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '6px' }}>Availability</div>
                                    <div style={{ color: 'white', fontSize: '1.28rem', fontWeight: 800, lineHeight: '1.3' }}>
                                        Available 24/7, seven days a week
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Contact;
