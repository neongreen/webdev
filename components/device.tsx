import React from 'react'
import { DeviceFrameset } from 'react-device-frameset'
import 'react-device-frameset/styles/marvel-devices.min.css'

export function Mac(props: { size: 'small'; children: React.ReactNode }) {
  return (
    <>
      <div className="wrapper">
        <div className="mac">
          <DeviceFrameset device="MacBook Pro">
            <div className="inside">{props.children}</div>
          </DeviceFrameset>
        </div>
      </div>
      <style jsx>{`
        .wrapper {
          width: 286px;
          height: 200px;
          margin: auto;
        }
        .mac {
          transform: scale(0.275);
          transform-origin: top left;
        }
        .inside {
          padding: 10px 20px;
          transform: scale(3);
          transform-origin: top left;
          max-width: 320px;
        }
      `}</style>
    </>
  )
}
