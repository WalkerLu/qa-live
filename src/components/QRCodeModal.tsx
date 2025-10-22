import React from 'react';
import { X } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';
import { useI18n } from '../contexts/I18nContext';

interface QRCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const QRCodeModal: React.FC<QRCodeModalProps> = ({ isOpen, onClose }) => {
  const { t } = useI18n();
  
  if (!isOpen) return null;

  const currentUrl = window.location.href;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-80 max-w-sm mx-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-900">
            {t('qrCode.title')}
          </h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <div className="flex flex-col items-center space-y-4">
          <div className="p-4 bg-white border border-gray-200 rounded-lg">
            <QRCodeSVG
              value={currentUrl}
              size={200}
              level="H"
              includeMargin
            />
          </div>
          
          <p className="text-sm text-gray-600 text-center">
            {t('qrCode.description')}
          </p>
          
          <div className="w-full bg-gray-100 p-3 rounded-md">
            <p className="text-xs text-gray-600 break-all">
              {currentUrl}
            </p>
          </div>
          
          <button
            onClick={() => {
              navigator.clipboard.writeText(currentUrl);
              alert(t('qrCode.copied'));
            }}
            className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors text-sm"
          >
            {t('qrCode.copyLink')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default QRCodeModal;