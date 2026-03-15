import React from 'react';
import { X, Heart, CreditCard, Phone, Facebook, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface DonateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DonateModal: React.FC<DonateModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-zinc-950/60 backdrop-blur-sm"
          />
          
          <motion.div
            drag
            dragConstraints={{ left: -200, right: 200, top: -200, bottom: 200 }}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col cursor-grab active:cursor-grabbing"
          >
            <div className="absolute top-4 right-4 z-20">
              <button
                onClick={onClose}
                className="p-2 bg-zinc-100/80 backdrop-blur-sm hover:bg-zinc-200 rounded-full transition-colors shadow-sm"
              >
                <X className="w-5 h-5 text-zinc-500" />
              </button>
            </div>

            <div className="overflow-y-auto flex-1 custom-scrollbar">
              <div className="grid grid-cols-1 md:grid-cols-2 min-h-full">
                {/* Left Side: Info */}
                <div className="p-6 md:p-8 bg-emerald-50 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/20">
                      <Heart className="w-6 h-6 text-white fill-current" />
                    </div>
                    <h2 className="text-2xl font-black tracking-tight text-zinc-900">Support Me</h2>
                  </div>
                  
                  <p className="text-zinc-600 mb-8 leading-relaxed text-sm md:text-base">
                    If you find this project helpful, consider supporting me to keep it updated with the latest fitness science and supplement research.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-emerald-100 shadow-sm">
                      <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center shrink-0">
                        <Phone className="w-5 h-5 text-emerald-600" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Momo / Phone</p>
                        <p className="text-base md:text-lg font-black text-zinc-900 tracking-tight truncate">0973683410</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-emerald-100 shadow-sm">
                      <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center shrink-0">
                        <CreditCard className="w-5 h-5 text-emerald-600" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">BIDV Bank</p>
                        <p className="text-base md:text-lg font-black text-zinc-900 tracking-tight truncate">3142848355</p>
                      </div>
                    </div>

                    <a 
                      href="https://www.facebook.com/profile.php?id=61582965982019&locale=vi_VN" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-between w-full p-4 bg-zinc-900 hover:bg-zinc-800 text-white rounded-2xl transition-colors group mt-2"
                    >
                      <div className="flex items-center gap-3">
                        <Facebook className="w-5 h-5" />
                        <span className="font-bold text-sm md:text-base">Contact on Facebook</span>
                      </div>
                      <ExternalLink className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </div>
                </div>

                {/* Right Side: QR Codes */}
                <div className="p-6 md:p-8 flex flex-col items-center justify-center gap-8 bg-white border-t md:border-t-0 md:border-l border-zinc-100">
                  <div className="text-center w-full max-w-[200px]">
                    <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-3">Scan to Donate (BIDV)</p>
                    <div className="relative group inline-block">
                      <div className="absolute -inset-4 bg-emerald-500/10 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <img 
                        src="https://img.vietqr.io/image/bidv-3142848355-compact.jpg?accountName=CAO%20MINH%20HIEN" 
                        alt="BIDV QR Code" 
                        className="w-40 h-40 md:w-48 md:h-48 rounded-2xl shadow-xl relative z-10 border-4 border-white mx-auto"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>

                  <div className="text-center w-full max-w-[200px]">
                    <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-3">Scan to Donate (Momo)</p>
                    <div className="relative group inline-block">
                      <div className="absolute -inset-4 bg-pink-500/10 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <div className="w-40 h-40 md:w-48 md:h-48 bg-zinc-50 rounded-2xl shadow-xl relative z-10 border-4 border-white flex flex-col items-center justify-center p-3 mx-auto">
                        <img 
                          src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=2|99|0973683410|||0|0|0|" 
                          alt="Momo QR Code" 
                          className="w-full h-full object-contain"
                          referrerPolicy="no-referrer"
                        />
                        <p className="text-[8px] md:text-[10px] font-bold text-pink-600 mt-1">MOMO: 0973683410</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
