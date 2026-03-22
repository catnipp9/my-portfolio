import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, Loader } from 'lucide-react';

type Status = 'idle' | 'sending' | 'success' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: data,
      });
      const json = await res.json();
      if (json.success) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  const inputClass =
    'w-full bg-white/5 border border-purple-800/40 rounded-2xl px-4 py-3.5 text-white placeholder-purple-400/40 text-sm focus:outline-none focus:border-purple-500/70 focus:bg-purple-900/20 transition-all';

  return (
    <div className="bg-white/5 border border-purple-800/30 rounded-[2rem] p-6 sm:p-8">
      <h3 className="text-xl font-bold text-white mb-1">Send a Message</h3>
      <p className="text-purple-300/50 text-sm mb-7">I'll get back to you as soon as possible</p>

      <AnimatePresence mode="wait">
        {status === 'success' ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center gap-5 py-16 text-center"
          >
            <div className="w-20 h-20 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center">
              <CheckCircle size={40} className="text-emerald-400" />
            </div>
            <h4 className="text-xl font-bold text-white">Message Sent!</h4>
            <p className="text-purple-300/60 text-base max-w-xs">Thanks for reaching out. I'll reply within 24 hours</p>
            <button
              onClick={() => setStatus('idle')}
              className="mt-2 px-8 py-2.5 bg-purple-500/20 border border-purple-600/40 text-purple-300 rounded-full text-base font-bold hover:bg-purple-500/30 transition-all"
            >
              Send another
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
          >
            {/* Web3Forms access key */}
            <input
              type="hidden"
              name="access_key"
              value="fa4bdf22-cdfc-4e9f-818f-b54f44457bfe"
            />
            <input type="hidden" name="subject" value="New message from portfolio" />
            <input type="checkbox" name="botcheck" className="hidden" />

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold text-purple-400 uppercase tracking-wider mb-1.5 block">
                  Full Name <span className="text-pink-400">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Juan Dela Cruz"
                  className={inputClass}
                />
              </div>
              <div>
                <label className="text-xs font-bold text-purple-400 uppercase tracking-wider mb-1.5 block">
                  Email Address <span className="text-pink-400">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="juan@example.com"
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-purple-400 uppercase tracking-wider mb-1.5 block">
                Subject <span className="text-purple-600">(optional)</span>
              </label>
              <input
                type="text"
                name="subject_field"
                placeholder="Project inquiry, collaboration, etc."
                className={inputClass}
              />
            </div>

            <div>
              <label className="text-xs font-bold text-purple-400 uppercase tracking-wider mb-1.5 block">
                Message <span className="text-pink-400">*</span>
              </label>
              <textarea
                name="message"
                required
                rows={6}
                placeholder="What's on your mind?"
                className={`${inputClass} resize-none`}
              />
            </div>

            {status === 'error' && (
              <div className="flex items-center gap-2 text-red-400 text-sm bg-red-400/10 border border-red-400/20 rounded-xl px-4 py-3.5">
                <AlertCircle size={16} />
                Something went wrong. Please try again.
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'sending'}
              className="flex items-center justify-center gap-2 w-full py-3.5 bg-purple-500 text-white rounded-2xl font-bold text-sm hover:bg-purple-400 hover:shadow-xl hover:shadow-purple-500/20 active:scale-95 transition-all disabled:opacity-60 disabled:cursor-not-allowed mt-1"
            >
              {status === 'sending' ? (
                <>
                  <Loader size={18} className="animate-spin" /> Sending…
                </>
              ) : (
                <>
                  <Send size={18} /> Send Message
                </>
              )}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}