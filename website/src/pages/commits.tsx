import React from 'react';
import commits from '../data/git-commits.json';

export default function GitCommits() {
  if (!commits || commits.length === 0) {
    return null; // ничего не выводим, если нет данных
  }

  return (
    <div>
      <h3>🕒 Последние изменения:</h3>
      <pre>
        {commits.map((c, i) => (
          <div key={i}>
            {c.date}: {c.message}
          </div>
        ))}
      </pre>
    </div>
  );
}
