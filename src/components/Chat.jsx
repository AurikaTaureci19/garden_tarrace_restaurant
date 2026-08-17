import { useState } from 'react';

function Chat() {
  const [message, setMessage] = useState('');
  const [reply, setReply] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    setLoading(true);
    try {
      const res = await fetch('http://localhost:3001/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message }),
      });
      const data = await res.json();
      setReply(data.reply);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
      <button onClick={sendMessage} disabled={loading}>
        {loading ? 'Se trimite...' : 'Trimite'}
      </button>
      <p>{reply}</p>
    </div>
  );
}

export default Chat;