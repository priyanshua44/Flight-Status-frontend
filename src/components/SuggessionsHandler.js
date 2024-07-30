import React from 'react'

export default function SuggessionsHandler({ suggestions, onClick }) {
  return (
    <div>{suggestions.map((suggesion, index) => (
        <div key={index} className="row " onClick={() => onClick(suggesion)}>
          <div className="col col-1 align-content-center">
          </div>
          <div className="col col-11 p-0 ps-2 bg-dark text-white" style={{ height: '40px' }}>
            {suggesion}
          </div>
        </div>
        ))}</div>
  )
}
