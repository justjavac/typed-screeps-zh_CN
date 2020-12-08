/**
 * RawMemory object allows to implement your own memory stringifier instead of built-in serializer based on JSON.stringify.
 */
interface RawMemory {
  /**
   * An object with asynchronous memory segments available on this tick. Each object key is the segment ID with data in string values.
   * Use RawMemory.setActiveSegments to fetch segments on the next tick. Segments data is saved automatically in the end of the tick.
   */
  segments: { [segmentId: number]: string };

  /**
   * An object with a memory segment of another player available on this tick. Use `setActiveForeignSegment` to fetch segments on the next tick.
   */
  foreignSegment: {
    username: string;
    id: number;
    data: string;
  };

  /**
   *  @deprecated Use `InterShardMemory` instead.
   *
   *  A string with a shared memory segment available on every world shard. Maximum string length is 100 KB.
   *
   * **Warning:** this segment is not safe for concurrent usage! All shards have shared access to the same instance of
   * data. When the segment contents is changed by two shards simultaneously, you may lose some data, since the segment
   * string value is written all at once atomically. You must implement your own system to determine when each shard is
   * allowed to rewrite the inter-shard memory, e.g. based on mutual exclusions.
   *
   */
  interShardSegment: string;

  /**
   * Get a raw string representation of the Memory object.
   */
  get(): string;
  /**
   * Set new memory value.
   * @param value New memory value as a string.
   */
  set(value: string): undefined;
  /**
   * Request memory segments using the list of their IDs. Memory segments will become available on the next tick in RawMemory.segments object.
   * @param ids An array of segment IDs. Each ID should be a number from 0 to 99. Maximum 10 segments can be active at the same time. Subsequent calls of setActiveSegments override previous ones.
   */
  setActiveSegments(ids: number[]): undefined;
  /**
   * Request a memory segment of another user.
   *
   * The segment should be marked by its owner as public using `setPublicSegments`.
   *
   * The segment data will become available on the next tick in `foreignSegment` object.
   *
   * You can only have access to one foreign segment at the same time.
   *
   * @param username The name of another user. Pass `null` to clear the foreign segment.
   * @param id The ID of the requested segment from 0 to 99. If undefined, the user's default public segment is requested as set by `setDefaultPublicSegment`.
   */
  setActiveForeignSegment(username: string | null, id?: number): undefined;
  /**
   * Set the specified segment as your default public segment. It will be returned if no id parameter is passed to `setActiveForeignSegment` by another user.
   *
   * @param id The ID of the requested segment from 0 to 99. Pass `null` to clear the foreign segment.
   */
  setDefaultPublicSegment(id: number | null): undefined;
  /**
   * Set specified segments as public. Other users will be able to request access to them using `setActiveForeignSegment`.
   *
   * @param ids An array of segment IDs. Each ID should be a number from 0 to 99. Subsequent calls of `setPublicSegments` override previous ones.
   */
  setPublicSegments(ids: number[]): undefined;
}

declare const RawMemory: RawMemory;
