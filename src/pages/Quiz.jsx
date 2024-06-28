import Header from '../components/Header';
import { useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

export default function Quiz() {
  const location = useLocation();
  const { selectedCharacters } = location.state;

  return (
    <>
      <Header />
      <div>
        <h2>Quiz Page</h2>
        {selectedCharacters.map((char, index) => (
            <div key={index}>
              {char.char}
            </div>
          ))}
        {/* TODO: CREATE LOGIC FOR QUIZZ */}
      </div>
    </>
  )
}
