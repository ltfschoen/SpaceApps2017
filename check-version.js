// Reference: http://stackoverflow.com/questions/29349684/how-can-i-specify-the-required-node-js-version-in-packages-json
import semver from 'semver';
import { engines } from './package';

const version = engines.node;

if (!semver.satisfies(process.version, version)) {
  console.log(`Required node version ${version} not satisfied with current version ${process.version}.`);
  process.exit(1);
}