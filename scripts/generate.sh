#!/bin/bash

if [ "$1" = "" ]; then
  echo fuck
fi

RAW_NAME=$1
COMPONENT_NAME="$(tr '[:lower:]' '[:upper:]' <<< ${RAW_NAME:0:1})${RAW_NAME:1}"

### Make Structure
mkdir "../components/${COMPONENT_NAME}"
mkdir "../components/${COMPONENT_NAME}/component"
mkdir "../components/${COMPONENT_NAME}/style"

### Make Files
touch "../components/${COMPONENT_NAME}/index.ts"
touch "../components/${COMPONENT_NAME}/component/${COMPONENT_NAME}.tsx"
touch "../components/${COMPONENT_NAME}/style/${COMPONENT_NAME}.style.ts"

### Make Boilerplate
# index.ts
/bin/cat <<EOM >"../components/${COMPONENT_NAME}/index.ts"
import $COMPONENT_NAME from './component/$COMPONENT_NAME';
export default $COMPONENT_NAME;
EOM
# component
/bin/cat <<EOM >"../components/${COMPONENT_NAME}/component/${COMPONENT_NAME}.tsx"
import React from 'react';
import { View, Text } from 'react-native';
import styles from '../style/$COMPONENT_NAME.style'

function $COMPONENT_NAME() {
  return (
    <View>
      <Text>$COMPONENT_NAME</Text>
    </View>
  );
}

export default $COMPONENT_NAME;
EOM
# stylesheet
/bin/cat <<EOM >"../components/${COMPONENT_NAME}/style/${COMPONENT_NAME}.style.ts"
import { StyleSheet } from 'react-native';

const style = StyleSheet.create({});

export default style;
EOM

### Add Component to App
# Add import
MARKER_INDEX=$(awk "/COMPONENT IMPORTS/{ print NR; exit }" '../App.tsx')
sed -i.bak "${MARKER_INDEX}a\\
import ${COMPONENT_NAME} from './components/${COMPONENT_NAME}';
" '../App.tsx'
# Add component
MARKER_INDEX=$(awk "/COMPONENT LIST/{ print NR; exit }" '../App.tsx')
INSERT_INDEX=$((MARKER_INDEX + 1))
sed -i.bak "${INSERT_INDEX}a\\
\ \ { component: <${COMPONENT_NAME} />, name: \"${COMPONENT_NAME}\"},
" '../App.tsx'
