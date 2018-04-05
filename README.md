# mongoose-promise-hooks

## Description

Simplifies creating promise based mongoose pre and post hooks

## Installation

```
$ npm install mongoose-promise-hooks
```

## Usage

```javascript
import hook from "mongoose-promise-hooks";

hook.pre(schema, "save", async function() {
  if (this.isNew()) {
    Email.send({
      title: `Welcome %{this.fullName}`,
      to: this.email
    });
  }
});

hook.post(schema, "save", async document => {
  const user = await User.findById(document.userId);
  // do things
  await user.save();
});
```

# Test

```
npm test
```
