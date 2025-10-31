import React, { useEffect, useState } from 'react';


export default function SaveableTextInput({
  storageKey = 'text-input',
  placeholder = 'Start typing...',
  label = '',
  title = 'Reflection Answer',
}) {
  const [text, setText] = useState('');
  const [saved, setSaved] = useState(false);
  const [loading, setLoading] = useState(true);

  // Load saved text on mount
  useEffect(() => {
    const loadText = async () => {
      try {
        const result = await window.sessionStorage.getItem(storageKey);
        if (result) {
          setText(result);
        }
      } catch (error) {
        console.log('No saved text found');
      } finally {
        setLoading(false);
      }
    };
    loadText();
  }, [storageKey]);

  // Save text to storage
  const handleSave = async () => {
    try {
      await window.sessionStorage.setItem(storageKey, text);
      setSaved(true);
      setTimeout(() => setSaved(false), 2000);
    } catch (error) {
      console.error('Failed to save text:', error);
      alert('Failed to save text. Please try again.');
    }
  };

  // Auto-save on text change (debounced)
  useEffect(() => {
    if (loading) return;

    const timeoutId = setTimeout(async () => {
      if (text) {
        try {
          await window.sessionStorage.setItem(storageKey, text);
        } catch (error) {
          console.error('Auto-save failed:', error);
        }
      }
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [text, loading, storageKey]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <div className="text-gray-600">Loading...</div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl bg-gradient-to-br from-blue-50 to-indigo-100 p-4 rounded-2xl shadow-xl p-8">

      <div className="mb-6">

        <h1 className="font-bold text-gray-800 mb-2">
          {title}
        </h1>

      </div>

      <div className="space-y-4">
        <textarea
          id="text-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={placeholder}
          className="w-full h-64 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
        />
      </div>
    </div>
  );
}

