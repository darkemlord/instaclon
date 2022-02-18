import React from 'react';
import { Button } from 'semantic-ui-react'

const SettingsForm = () => {
  return (
    <div className='settings-form'>
      < Button>Change password</Button>
      < Button>Change email</Button>
      < Button>Change description</Button>
      < Button>Change website</Button>
      < Button>Log Out</Button>
    </div>
  )
}

export default SettingsForm;
