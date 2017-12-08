import DateTime from "../../core/models/date-time";

export default function getAge(input: any) {
  const value = new DateTime(input).asMoment();
  if (value.isValid()) {
    return new DateTime().asMoment().diff(value, 'years');
  }
  return 0;
}
