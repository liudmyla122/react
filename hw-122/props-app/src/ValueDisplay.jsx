import React, { useRef, useEffect } from 'react'

export default function ValueDisplay({ value }) {
  const prevRef = useRef('')

  useEffect(() => {
    prevRef.current = value
  }, [value])

  return (
    <div className="values">
      <p>
        <span>Current Value:</span> {value || '—'}
      </p>
      <p>
        <span>Previous Value:</span> {prevRef.current || '—'}
      </p>
    </div>
  )
}
