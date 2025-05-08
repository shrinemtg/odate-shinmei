// 共通ユーティリティ関数の雛形

export function isDefined<T>(value: T | undefined | null): value is T {
  return value !== undefined && value !== null;
}