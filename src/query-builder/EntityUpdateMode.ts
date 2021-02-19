/**
 * Specifies whether to update an entity after an INSERT or UPDATE operation.
 */
export enum EntityUpdateMode {
    /**
     * No update; for INSERT, this means the inserted identifiers are not set in the inserted entity
     * (nor in the returned InsertResult's identifiers property, if using repository insert or InsertQueryBuilder).
     */
    None = 0,
    /**
     * Update only identity; this is only applicable for INSERT queries and it copies back the generated identifier
     * of the inserted row back to the inserted entity model. The identifier is also available in the InsertResult's identifiers property.
     *
     * NOTE: only works if the driver returns inserted identities in the result (e.g. Aurora Data API).
     */
    IdentityOnly,
    /**
     * Update all entity columns back to the entity model after insert or update.
     *
     * NOTE: For drivers which do not support RETURNING / OUTPUT clauses, this will generate an additional
     *       SELECT statement after the insert.
     */
    All
}
